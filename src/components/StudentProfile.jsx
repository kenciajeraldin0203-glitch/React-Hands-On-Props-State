import React from "react";

function StudentProfile({ name, rollNo, course, college }) {
    return (
        <div className="card">
            <h2>Student Profile</h2>

            <div className="profile-row">
                <strong>Name</strong>
                <span>: {name}</span>
            </div>

            <div className="profile-row">
                <strong>Roll No</strong>
                <span>: {rollNo}</span>
            </div>

            <div className="profile-row">
                <strong>Course</strong>
                <span>: {course}</span>
            </div>

            <div className="profile-row">
                <strong>College</strong>
                <span>: {college}</span>
            </div>
        </div>
    );
}

export default StudentProfile;