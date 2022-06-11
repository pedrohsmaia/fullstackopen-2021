import Course from './Course'

const Courses = ({ courses }) =>
    <div>
        {courses.map((course, i) =>
            <Course key={i} course={course} />
        )}
    </div>

export default Courses;