let cursos_idioma = [
    {idioma: "ingles", preço: 2500, carga_horaria: 250},
    {idioma: "espanhol", preço: 3000, carga_horaria:100},
    {idioma:"frances" , preço:1500,carga_horaria:400}
 ]
for(let cont of cursos_idioma ) {
    let nome_curso = cont.idioma;
    let preço_curso = cont.preço;
    let carga_horaria_curso = cont.carga_horaria;
    let preço_hora_curso = preço_curso / carga_horaria_curso
}
console.log("nome do curso: "+nome_curso)
console.log("preço do curso: "+preço_curso)
console.log("preço da hora do curso: "+preço_hora_curso)