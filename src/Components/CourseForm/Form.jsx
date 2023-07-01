    const CourseForm = (props) =>{
        return(
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.current} onChange={props.updateCourese}/>
            <button type="submit" >Add Course</button>
        </form>
        )
    }
export default CourseForm;