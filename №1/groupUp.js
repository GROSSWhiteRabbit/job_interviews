const arr = [ "Городничий","Аммос Федорович",
"Артемий Филиппович","Лука Лукич"];
const piece = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`;

function groupUp(roles, piece) {    
    let str = '';

    roles.forEach(role => {
        str = str + '\n\n' + role + ':\n';
        
        const roleReg = new RegExp(`(?<=(${role}:)).*(?=(\n|))`, 'ig');
        piece.match(roleReg);
        if(piece.match(roleReg)) {
            piece.match(roleReg).forEach((roleStr, j)=> {
                str = str + `\n${j+1}) ${roleStr}`;
                
            });
        }        
    });
    return str;
}
console.log(groupUp(arr, piece));

