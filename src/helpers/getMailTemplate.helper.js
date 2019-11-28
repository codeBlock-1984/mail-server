const getMailTemplate = (emailData) => {
  const {
    name, phone, email, purpose
  } = emailData;


  return `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport"
             content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Bankr</title>
            <style>
              * {
                box-sizing: border-box;
              }
            html, body{
              width: 100%;
              height: 100%;
            }
            body {
              padding: 0;
              margin: 0;
              color: #0000;
            }
            
            .mail-box {
              width: 80%;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              flex-wrap: nowrap;
              justify-content: center;
            }
            .mail-title {
              color: #888888;
              font-size: 1.5rem;
            }
            .mail-text {
              color: #888888;
              font-size: 1rem;
              display: block;
            }

            </style>
          </head>
          <body>
            <table class="mail-box">
             <tr>
               <td>
                 <h1 class="mail-title">Client Request</h1>
               </td>
             </tr>
             <tr>
               <td>
                 <p class="mail-text">Name - ${name}</p>
               </td>
             </tr>
             <tr>
               <td>
                <p class="mail-text">Mobile - ${phone}</p>
               </td>
             </tr>
             <tr>
               <td>
                 <p class="mail-text">Email - ${email}</p>
               </td>
             </tr>
             <tr>
               <td>
                 <p class="mail-text">Purpose - ${purpose}</p>
               </td>
             </tr>
            </table>
          </body>
          </html>`;
};

export default getMailTemplate;
