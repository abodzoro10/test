
import React,{Component} from 'react'
import CourseForm from './Components/CourseForm/Form';
import CourseList from './Components/CourseList/List';

class App extends Component {
  
  state = {
    courses :[
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'JS'},
    ],
    current : ''
  }
  //update coureses
  updateCourese =(e) =>{
    this.setState(
      {
        current: e.target.value
      }
    )
  }

  //addCourse
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current})
    this.setState({
      courses,
      current: ""
    })
  }
  
  // deltecourse
  deleteCourse = (index) =>{
    let courses = this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses
    })
  }

  //editCourse
  editCourse =(index,value) =>{
    let coureses =  this.state.courses;
    let course = coureses[index];
    course['name'] = value;
    this.setState({
      coureses
    })

  }

  render(){
    const {courses} =this.state;
    const courseList = courses.map((course,index) => {
      return <CourseList details={course} key={index} update={this.handleChange} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
      
    return (
      <section className="App">
    <h2> Add Course</h2>
      <CourseForm current={this.state.current} updateCourese={this.updateCourese} addCourse={this.addCourse}/>
      {courseList}
      </section>
    );
  }
}

export default App;
