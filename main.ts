let grade_of_student = 0
let average_grade = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        grade_of_student = randint(1, 100)
        basic.showNumber(grade_of_student)
        if (grade_of_student >= 90 && grade_of_student <= 100) {
            basic.showString("A")
        } else if (grade_of_student >= 80 && grade_of_student <= 89) {
            basic.showString("B")
        } else if (grade_of_student >= 70 && grade_of_student <= 79) {
            basic.showString("C")
        } else if (grade_of_student >= 60 && grade_of_student <= 69) {
            basic.showString("D")
        } else if (grade_of_student <= 59) {
            basic.showString("F")
        }
    }
    average_grade = 0
})
