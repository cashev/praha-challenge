# 複合インデックス

## 課題02

### SQL01

``` sql
SELECT DISTINCT last_name, first_name 
FROM employees.employees 
WHERE last_name LIKE 'c%' AND first_name LIKE 'c%';
```

### SQL02

``` sql
SELECT emp_no 
FROM employees.titles 
WHERE title = 'Senior Engineer' 
  AND to_date = '9999-01-01' 
  AND YEAR(from_date) >= '2002';
```

### SQL03

``` sql
SELECT *
FROM employees.employees 
WHERE YEAR(birth_date) = '1952' AND first_name = 'Katsuo'
ORDER BY hire_date, last_name;
```
