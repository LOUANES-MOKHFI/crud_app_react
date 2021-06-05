import React, {Component} from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state = {
    courses:[
      {name:' HTML'},
      {name:' CSS'},
      {name:' PHP'},
    ],
    current :''
  }

  ///////add course
    addCourse = (e) => {
      e.preventDefault();
      let current = this.state.current;
      if(current === '' ){
        return false;
      }else{
      let courses = this.state.courses;
      courses.push({name: current});
      this.setState({
        courses,
        current: ''
      });
    }
    }
  ///////udate course
    updateCourse = (e) => {
      this.setState({
        current : e.target.value
      })

    }

    deleteCourse = (index) => {
     
      let courses = this.state.courses;
      courses.splice(index,1);
      this.setState({courses});
    }
    ///edit Course
    editCourse = (index,value) => {
      let courses = this.state.courses;
      let course = courses[index];
      course['name'] = value;
      this.setState({courses});
    }


  render(){
    const {courses} = this.state;
    let length = courses.length;
    const courseList = length ? (courses.map((course, index) => {
      return <CourseList course = {course} key={index} index={index} update = {this.handleChange} deleteCourse = {this.deleteCourse} editCourse= {this.editCourse}/>
    }))
    : (<p> Aucun cour existe</p>)

    return (
      <section className="App">
       <h2>Ajouter un cour</h2>
       <CourseForm updateCourse = {this.updateCourse} addCourse = {this.addCourse} current = {this.state.current}/>
      <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
