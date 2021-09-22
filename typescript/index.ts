type Id = number | string
type courses = {name: string, studensCount: number}

interface IAdmin {
    apyKey: string
    courses: courses[]
}

interface Student {
    courses: string[]
    nickName: string
}

interface Colorful {
    color: string
    name: string
}

interface Circle {
    radius: number
    name: string
}

type CC =  Colorful & Circle

let teste: CC


interface IUsuario<T = Student> {
    id: Id
    email: string
    password: string
    type: T
}

let student: IUsuario
let teacher: IUsuario<IAdmin>

student = {id: '111', email: 'email@!gmail.com', password: 'asasas', type: {courses: ['abc', 'dc'], nickName: 'alfred'}}
teacher = {id: '111', email: 'email@!gmail.com', password: 'asasas', type: {apyKey: 'aksksks', courses: [{name: 'abc da amaozina', studensCount: 20}]}}

console.log(student)