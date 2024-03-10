const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const question = document.querySelectorAll('.question');
const reload = document.querySelector('.reload button');



const answers = ['Windhoek', 'Niamey', 'Maputo', 'Dakar', 'Kigali'];

form.addEventListener('submit', event => {
    event.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    let score = 0;

    userAnswers.forEach((attempt, index) => {
        if (attempt === answers[index]) {
            question[index].classList.add('correct');
            console.log(`${attempt} is correct`);
            score++;
        } else {
            question[index].classList.add('wrong');
            console.log(`${attempt} is wrong`);
        }
    })

    scrollTo(0, 0);
    result.classList.remove('hide');
    result.querySelector('p').textContent = `You scored ${score}/5`;
})

reload.addEventListener('click', event => {
    location.reload();
})

