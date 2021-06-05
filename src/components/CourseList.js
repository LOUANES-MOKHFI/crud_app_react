import React, { Component ,Fragment} from 'react';

class CourseList extends Component {

    state = {
        isEdit : false
    }
    //render Course Iem
    renderCourse = () => {
        return(
            <li>
                <span>{this.props.course.name}</span>
                <button onClick={this.toggleState}>Modifier</button>
                <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>supprimer</button>
             </li>
        )
    }

    /// ToggleState
        toggleState = () => {
            let {isEdit} = this.state;
            this.setState({
                isEdit: !isEdit
            })
        }

        updateCourseItem = (e) => {
            e.preventDefault();
            this.props.editCourse(this.props.index,this.input.value);
            this.toggleState();
        }
/// render Update Form item
renderUpdateForm= () => {
    return (
        <form onSubmit={this.updateCourseItem}>
            <input type="text" defaultValue={this.props.course.name} ref={(v) => this.input = v}/>
            <button>Modifier le cour</button>
        </form>
    )
}
 render(){
     let {isEdit} = this.state
    return (
        <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse()}
        </Fragment> 
           )
 }
}

export default CourseList;