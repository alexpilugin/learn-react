const Timer = React.createClass({
    render: function (){
        const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        return (
            <div className='card'>
                <div className='content'>
                    <div className='icons-container'>
                        <div className='timer-icons'>
                            <span className='trash-icon'>
                                <i className="fa fa-trash fa-2"></i>
                            </span>
                            <span className='edit-icon'>
                                <i className="fa fa-pencil-square-o fa-2"></i>
                            </span>
                        </div>
                    </div>
                    <div className='header'>{this.props.title}</div>
                    <div className='meta'>{this.props.project}</div>
                    <div className='description centered'> <h2>{elapsedString}</h2> </div>
                    
                </div>
                <div className=' blue button start centered'> Start </div>
            </div>
        );
    },
});

const TimerForm = React.createClass({
    render: function (){
        const submitText = this.props.title ? 'Update' : 'Create'; //if title is undefined then 'Create'
        return (
            <div className='card'>
                <div className='form'>
                    <div className='field'>
                        <label>Title: <br />
                            <input type='text' defaultValue={this.props.title} className='w100'/>
                        </label>
                    </div>
                    <div className='field'>
                        <label>Project: <br />
                            <input type='text' defaultValue={this.props.project} className='w100'/>
                        </label>
                    </div>
                    <div className='buttons'>
                        <button className='blue button w50'> {submitText} </button>
                        <button className='red button w50'> Cancel </button>
                    </div>
                </div>
            </div>
        );
    }
});

const EditableTimer = React.createClass({
    render: function () {
        if (this.props.editFormOpen) {
            return (
                <TimerForm 
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return (
                <Timer 
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    },
});

const EditableTimerList = React.createClass({
    render: function (){
        return (
            <div id='timers'>
                <EditableTimer 
                    title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer 
                    title='Learn extreme ironing'
                    project='World Domination'
                    elapsed='3890985'
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        );
    },
});

const ToggleableTimerForm = React.createClass({
    render: function (){
        if (this.props.isOpen) {
            return (
                <TimerForm />
            );
        } else {
            return (
                <div className='plus'>
                    <button className='button red plus-button'> 
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            );
        }
    },
});

const TimerDashboard = React.createClass({
    render: function (){
        return (
            <div className ='timer-dashboard'>
                <div className='timers'>
                    <ToggleableTimerForm isOpen={false} />
                    <EditableTimerList />
                </div>
            </div>
        );
    },
});


ReactDOM.render(
    <TimerDashboard />,
    document.getElementById('content')
);
