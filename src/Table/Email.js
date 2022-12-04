async function Email(url = '', targetemail = '') {
  
  var EmailBody=[
      "cs@methodworx.com",
      targetemail,
      "New task to you",
      "Please check the Task Management System, Thank you for your help and hope you have a nice day!"
  ]

    fetch(url,
    {
    	method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(EmailBody)
    })
  }

  export default Email;