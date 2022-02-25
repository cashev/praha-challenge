# SQL10本ノック

## 任意課題

<https://sqlzoo.net/wiki/SQL_Tutorial/ja>

### Using Null

<https://sqlzoo.net/wiki/Using_Null>

1

``` sql
SELECT name 
FROM teacher 
WHERE dept IS NULL
```

3

``` sql
SELECT teacher.name, dept.name 
FROM teacher 
LEFT OUTER JOIN dept 
  ON teacher.dept = dept.id
```

4

``` sql
SELECT teacher.name, dept.name 
FROM teacher 
RIGHT OUTER JOIN dept 
ON teacher.dept = dept.id
```

5

``` sql
SELECT name, COALESCE(mobile, '07986 444 2266')   
FROM teacher
```

6

``` sql
SELECT teacher.name, COALESCE(dept.name, 'None') 
FROM teacher 
LEFT JOIN dept 
  ON teacher.dept = dept.id
```

7

``` sql
SELECT COUNT(name), COUNT(mobile)
FROM teacher 
```

8

``` sql
SELECT dept.name, COUNT(teacher.name) 
FROM teacher 
RIGHT JOIN dept 
  ON teacher.dept = dept.id 
GROUP BY dept.name
```

9

``` sql
SELECT 
  name, 
  CASE 
    WHEN dept IN (1,2) THEN 'Sci' 
    ELSE 'Art' 
  END 
FROM teacher
```

10

``` sql
SELECT 
  name, 
  CASE 
    WHEN dept IN (1,2) THEN 'Sci' 
    WHEN dept = 3 THEN 'Art' 
    ELSE 'None' 
  END 
FROM teacher
```
