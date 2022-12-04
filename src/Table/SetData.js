async function setData(url = '', json = []) {
  //console.log(JSON.stringify(json));
    fetch(url,
    {
    	method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json)
    })
  }

  export default setData;