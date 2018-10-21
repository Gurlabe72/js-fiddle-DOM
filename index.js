var elementsArray = [
  {name: 'Hydrogen', number: '1', symbol: 'H'}, 
  {name: 'Mercury', number: '80', symbol: 'Hg'},
  {name: 'Lead', number: '82', symbol: 'Pb'},
  {name: 'Bismuth', number: '83', symbol: 'Bi'},
  {name: 'Neon', number: '10', symbol: 'Hg'},
  ];
  
  function displayTable(periodicTable){   
      var table = document.getElementById('periodicTable');
      for (var i = 0; i < periodicTable.length; ++i) {   
          var attribute = periodicTable[i];
          var row = document.createElement('tr');       
          var properties = ['name', 'number', 'symbol'];
  
          for (var j = 0; j < properties.length; ++j) {  
              var cell = document.createElement('td');
              cell.innerHTML = attribute[properties[j]];
              row.appendChild(cell);
          } 
          table.appendChild(row);
      }
  }
  displayTable(elementsArray);