# FW_EZHIL_ASSIGNMENT
SE Assignment JSON merge

JSON merge this program allows you to read any random no of JSON files containing JSON array of objects
into a single file containing one JSON Object.

This program merges the JSON arrays based on it's name 

Sample 
input 1:
data1.json

{
    "strikers": [
        {
            "name": "Alexis Sanchez",
            "club": "Manchester United"
        },
        {
            "name": "Robin van Persie",
            "club": "Feyenoord"
        },
        {
            "name": "Nicolas Pepe",
            "club": "Arsenal"
        }
    ],
    "employees": [
        {
            "name": "Alexis Sanchez",
            "club": "Manchester United"
        },
        {
            "name": "Robin van Persie",
            "club": "Feyenoord"
        },
        {
            "name": "Nicolas Pepe",
            "club": "Arsenal"
        }
    ]
}

input 2:
data2.json
{
    "strikers": [
        {
            "name": "Nicolas Pepe",
            "club": "Arsenal"
        }
    ]
}


input 3:
data3.json
{
    "strikers": [
        {
            "name": "Gonzalo Higuain",
            "club": "Napoli"
        },
        {
            "name": "Sunil Chettri",
            "club": "Bengaluru FC"
        }
    ]
}

Output

{
    "strikers": [
        {
            "name": "Alexis Sanchez",
            "club": "Manchester United"
        },
        {
            "name": "Robin van Persie",
            "club": "Feyenoord"
        },
        {
            "name": "Nicolas Pepe",
            "club": "Arsenal"
        },
        {
            "name": "Nicolas Pepe",
            "club": "Arsenal"
        },
        {
            "name": "Gonzalo Higuain",
            "club": "Napoli"
        },
        {
            "name": "Sunil Chettri",
            "club": "Bengaluru FC"
        }
    ],
    "employees": [
        {
            "name": "Alexis Sanchez",
            "club": "Manchester United"
        },
        {
            "name": "Robin van Persie",
            "club": "Feyenoord"
        },
        {
            "name": "Nicolas Pepe",
            "club": "Arsenal"
        }
    ]
}
