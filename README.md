### Hexlet tests and linter status:
[![Actions Status](https://github.com/kolix2006/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kolix2006/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kolix2006_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=kolix2006_frontend-project-46)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=kolix2006_frontend-project-46&metric=bugs)](https://sonarcloud.io/summary/new_code?id=kolix2006_frontend-project-46)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kolix2006_frontend-project-46&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=kolix2006_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kolix2006_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=kolix2006_frontend-project-46)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=kolix2006_frontend-project-46&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=kolix2006_frontend-project-46)

## Вычислитель отличий

Вычисляет отличия между двумя файлами конфигурации.

Доступные расширения: `.json`, `.yml`/`.yaml`

Доступные форматы: `stylish` (по умолчанию), `plain`, `json`

## Установка

```bash
git clone https://github.com/kolix2006/frontend-project-46.git
cd frontend-project-46
npm ci
```

## Запуск

```bash
node gendiff.js file1.json file2.json                  # stylish по умолчанию
node gendiff.js --format plain file1.json file2.json   # plain-формат
node gendiff.js --format json file1.json file2.json    # json-формат
```

## Демонстрация

Плоские файлы:

![PlainJsonFiles](screenshots/gd1.PNG)
![PlainYamlFiles](screenshots/gd2.PNG)

Файлы с рекурсией в stylish-форматировании:

![RecursiveStylishFiles](screenshots/gd3.PNG)

Файлы с рекурсией в plain-форматировании:

![RecursivePlainFiles](screenshots/gd4.PNG)

Файлы с рекурсией в json-форматировании:

![RecursiveJsonFiles](screenshots/gd5.PNG)
