# CSV Manager 
# Usage
Import the package
```javascript
const csv_manager = require('csv-manager');
```
## JSON to CSV converter
## Convert your json variable into a csv file.
```javascript
csv_manager.toCSV(jsonArray,separator,path);
```
And your csv file will be saved in the path you wrote!

# Example

Having the json array
```javascript
var people=[
    {name: 'Bruce', surname: 'Wayne'},
    {name: 'Clark', surname:'Kent'},
    {name: 'Peter', surname: 'Parker}
]
```
Use the function toCSV() to get your CSV file, using the separator you want, in this example we are using comma (,)

```javascript
csv_manager.toCSV(people,',','people.csv');
```
And your CSV file will be ready!




