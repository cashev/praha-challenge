import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import Joi from 'joi';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const airtableToken = process.env.AIRTABLE_PAT;
const baseId = process.env.AIRTABLE_BASE_ID;
const tableName = process.env.AIRTABLE_TABLE_NAME;

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
      headers: {
        Authorization: `Bearer ${airtableToken}`
      }
    });
  
    res.json(response.data.records);
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const recordSchema = Joi.object({
  Id: Joi.string().required(),
  Name: Joi.string().required(),
  Age: Joi.number().integer().min(0).required(),
});

app.post('/users', async (req, res) => {
  const { error, value } = recordSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const data = { records: [{ fields: value }] };
    console.log(JSON.stringify(data));
    const response = await axios.post(`https://api.airtable.com/v0/${baseId}/${tableName}`, 
      data,
      {
        headers: {
          Authorization: `Bearer ${airtableToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error creating new record in Airtable:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
