// Utility types
// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 0 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // Send to DB
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({ ...assignGraded, verified: true })

// Record 
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finaleGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 75, assign2: 15 }
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | 'grade'>

const score: AssignResult = {
    studentId: 'K123',
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: 'K123',
    title: "Final Project"
}

// Exckyde and Extract

type adjustGrade = Exclude<LetterGrades, "U"> // All less the U

type highGrades = Extract<LetterGrades, "A" | "B"> // Only A and B

// Nonnullable

type AllPossibleGrades = "Dave" | "Jonh" | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades> // Excludes null and undefined

// ReturnType 

// type newAssign = {
//     title: string,
//     points: number
// }

// If we give the return type for the bellow const, it will have to be changed always the createAssign changes
// Instead we can use the ReturnType to use the type of createAssign after it is created.
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("UtilityTypes", 100)
console.log(tsAssign)

// Parameters 

type AssingParams = Parameters<typeof createNewAssign>

const assignArgs: AssingParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the REturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message)
        }
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

