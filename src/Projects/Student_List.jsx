import { useState } from 'react';

export default function StudentList() {
    const students = [
                        "Soham",
                        "Alex",
                        "John",
                        "Sarah"
                                    ]

    const result = students.map((student, index) => <p key={index}>{student}</p>)

    return (
        <>
            <p>Student List :</p>

            {result}
        </>
    );
}