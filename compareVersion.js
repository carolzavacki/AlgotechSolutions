var compareVersion = function(version1, version2) {
    
    let versionA = version1.split('.');
    let versionB = version2.split('.');
  
    let numberOfIterations = Math.max(versionA.length, versionB.length);
  
    for(let i = 0; i < numberOfIterations; i++){
  
          let revision1 = +versionA[i] || 0;
          let revision2 = +versionB[i] || 0;
  
          if(revision1 < revision2) {
              console.log(-1);
              return -1;
          }
          if(revision1 > revision2){
              console.log(1);
              return 1;
          }
      }
      console.log(0);
      return 0;
  };