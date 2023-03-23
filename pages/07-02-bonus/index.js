

const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
];


const ClassMates = () => {

    const rabitSchoolMates = classmates.filter((mate) => mate.school.includes("토끼")).map((mate) => {
        mate = {...mate, candy: 10};

        return (
            <li key={mate.name}>
                <span>{mate.name}</span>
                <span>{mate.age}</span>
                <span>{mate.school}</span>
                <span>{mate.candy}</span>
            </li>
        );
    });


    const squirrelSchoolMates = classmates.filter((mate) => mate.school.includes("다람쥐")).map((mate) => {
        return(
            <li key={mate.name}>
                <span>{mate.name}</span>
                <span>{mate.age}</span>
                <span>{mate.school}</span>
            </li>
        );
    })
    console.log(rabitSchoolMates);
    console.log(squirrelSchoolMates);

    
    return(
        <div>
            <h1>토끼 학교 mate</h1>
            <ul>
                {rabitSchoolMates}
            </ul>
            <h1>다람쥐 학교 mate</h1>
            <ul>
                {squirrelSchoolMates}
            </ul>
        </div>
    );
    
};


export default ClassMates;