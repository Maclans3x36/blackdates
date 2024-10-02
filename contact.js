// // conditional contact modification
let  contact = [

    {
        firstName: 'Kamo',
        surname: 'Lanshima',
        email: 'kamo@lans.com'},

    {
        firstName: 'Friday',
        surname: 'Emmanuel',
        email: 'courage@kamo.lans',
       },

       {firstName: 'Jeth',
        surname: 'Lans',
        email: 'Jeth@lans.com',
       }
    
    ]

    let decision = window.prompt('1, 2, Add')
    let counter = 1

    let action;

    switch(decision){

        case '1' :action = alert(`Surname: ${contact[0].surname} First Name: ${contact[0].firstName} Email: ${contact[0].email} `); break;
        case '2' :action = alert(`Surname: ${contact[2].surname} First Name: ${contact[2].firstName} Email: ${contact[2].email} `); break;
        case 'Add':
            let firstName = window.prompt('First Name');
            let surname = window.prompt('Surname');
            let email = window.prompt('Email');
            let mobile = Number(window.prompt('Mobile Number',0))
            if (isNaN(mobile)){alert('input digits only')}
            
            if(!firstName || !surname || !email){
                alert('Invalid Input')
            }
            else{  let newContact = {firstName:firstName, surName:surname, email:email, mobile:mobile}
            contact.push(newContact)
            

            
        }
        // while(!decision){
        //     newContact === true; 

        //     window.alert(`[${counter}] User added Successfully`)
            

        // }
    }

    



    


    
