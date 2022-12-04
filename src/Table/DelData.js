async function delData(url = '', id) {
    fetch(url,
    {
    	method: "Delete",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: id
    })
  }

  export default delData;