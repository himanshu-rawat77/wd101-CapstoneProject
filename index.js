let userForm = document.getElementById('user-Form');



function retrieveEntry(){
    let entries = localStorage.getItem('user-entry');
    if(entries){
        entries = JSON.parse(entries);
    }else{
        entries = [];
    }
    return entries;
}

let userEntry = retrieveEntry();

const displayEntry =(userEntry) => {
    let entries = retrieveEntry();
    const tableEntries = entries.map((entry) =>{
            const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
            const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
            const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
            const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
            const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;

            const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
            return row;
    }).join('</n>');

    const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">Accepted Terms?</th>
    </tr>${tableEntries} </table>`;

    let details = document.getElementById('user-entry');
    details.innerHTML = table;


}
let saveUserForm = (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let acceptTerms = document.getElementById('acceptTerms').checked;
    const entry = {
        name,
        email, 
        password, 
        dob,
        acceptTerms
    }


    userEntry.push(entry);
    localStorage.setItem('user-entry', JSON.stringify(userEntry));
    displayEntry();
}
userForm.addEventListener('submit', saveUserForm)
displayEntry();