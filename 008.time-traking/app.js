/*
TimerDashboard (parent)
|    |
|----ToggleableTimerForm (+/Create)
|----EditableTimerList
|       |
|-------EditableTimer (parent)
|           |
|-----------TimerForm (Edit)
|-----------Timer
|               |
|---------------TimerActionButton
*/

const TimerActionButton = React.createClass({
    render: function () {
        if (this.props.timerIsRunning) {
            return (
                <div className='red button centered' onClick={this.props.onStopClick}> Stop </div>
            );
        } else {
            return (
                <div className=' blue button start centered' onClick={this.props.onStartClick}>
                Start </div>
            );
        }
    },
});

const Timer = React.createClass({
    componentDidMount: function () {
        this.forceUpdateInterval = setInterval( () => this.forceUpdate(), 50 ); //forceUpdateInterval is unique interval ID
    },
    componentWillUnmount: function () {
        clearInterval(this.forceUpdateInterval);
    },
    handleTrashClick: function () {
        this.props.onTrashClick(this.props.id);
    },
    handleStartClick: function () {
        this.props.onStartClick(this.props.id);
    },
    handleStopClick: function () {
        this.props.onStopClick(this.props.id);
    },
    render: function (){
        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return (
            <div className='card'>
                <div className='content'>
                    <div className='icons-container'>
                        <div className='timer-icons'>
                            <span className='trash-icon' onClick={this.handleTrashClick}>
                                <i className="fa fa-trash fa-2"></i>
                            </span>
                            <span className='edit-icon' onClick={this.props.onEditClick}>
                                <i className="fa fa-pencil-square-o fa-2"></i>
                            </span>
                        </div>
                    </div>
                    <div className='title'>{this.props.title}</div>
                    <div className='meta'>{this.props.project}</div>
                    <div className='description centered'> <h2>{elapsedString}</h2> </div>
                    
                </div>
                <TimerActionButton  
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        );
    },
});

const TimerForm = React.createClass({
    handleSubmit: function (){
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.refs.title.value,
            project: this.refs.project.value,
        });
    },
    render: function (){
        const submitText = this.props.id ? 'Update' : 'Create'; //if id is undefined then 'Create'
        return (
            <div className='card'>
                <div className='form'>
                    <div className='field'>
                        <label>Title: <br />
                            <input type='text' 
                                ref='title' 
                                defaultValue={this.props.title} 
                                className='w100' 
                                maxLength={23}
                            />
                        </label>
                    </div>
                    <div className='field'>
                        <label>Project: <br />
                            <input type='text' 
                                ref='project' 
                                defaultValue={this.props.project} 
                                className='w100' 
                                maxLength={28}
                            />
                        </label>
                    </div>
                    <div className='buttons'>
                        <button className='blue button w50' onClick={this.handleSubmit}> {submitText} </button>
                        <button className='red button w50' onClick={this.props.onFormClose}> Cancel </button>
                    </div>
                </div>
            </div>
        );
    }
});

const EditableTimer = React.createClass({
    getInitialState: function () {
        return {
            editFormOpen: false,
        };
    },
    handleEditClick: function (){
        this.openForm();
    },
    handleFormClose: function (){
        this.closeForm();
    },
    handleSubmit: function (timer) {
        this.props.onFormSubmit(timer);
        this.closeForm();
    },
    closeForm: function (){
        this.setState({ editFormOpen: false});
    },
    openForm: function (){
        this.setState({ editFormOpen: true});
    },
    render: function () {
        if (this.state.editFormOpen) {
            return (
                <TimerForm 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            );
        }
    },
});

const EditableTimerList = React.createClass({
    render: function (){
        const timers = this.props.timers.map((timer) => (
            <EditableTimer 
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
            />
        ));
        return (
            <div id='timers'>
                {timers}
            </div>
        )
    },
});

const ToggleableTimerForm = React.createClass({
    getInitialState: function () {
        return {
            isOpen: false,
        };
    },
    handleFormOpen: function () {
        this.setState({ isOpen: true });
    },
    hundleFormClose: function (){
        this.setState({ isOpen: false });
    },
    hundleFormSubmit: function (timer) {
        this.props.onFormSubmit(timer); //from TimersDashboard
        this.setState({ isOpen: false });
    },
    render: function (){
        if (this.state.isOpen) {
            return (
                <TimerForm //all props are undefined
                    onFormSubmit={this.hundleFormSubmit}
                    onFormClose={this.hundleFormClose}
                /> 
            );
        } else {
            return (
                <div className='card'>
                    <div  className='centered'>
                        <h1>A.Pilugin. Time tracking </h1>
                        <h3>(JSX, Babel, ReactJS, Font Awesome)</h3>
                    </div>
                    <button className='button red plus-button' onClick={this.handleFormOpen}> 
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            );
        }
    },
});

const TimerDashboard = React.createClass({
    getInitialState: function (){
        return {
            timers: [
                {
                    title: 'Practice squat',
                    project: 'Gym Chores',
                    id: uuid.v4(),
                    elapsed: 5456099,
                    runningSince: Date.now(),
                },
            ],
        };
    },
    hundleCreateFormSubmit: function (timer){
        this.createTimer(timer);
    },
    handleEditFormSubmit: function (attrs) {
        this.updateTimer(attrs);
    },
    handleTrashClick: function (timerId) {
        this.deleteTimer(timerId);
    },
    handleStartClick: function (timerId) {
        this.startTimer(timerId);
    },
    handleStopClick: function (timerId){
        this.stopTimer(timerId);
    },
    startTimer: function (timerId) {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, { //ES6: assign new values of properties
                        runningSince: now,
                    });
                } else {
                    return timer;
                }
            }),
        });
    },
    stopTimer: function (timerId){
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince : null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    },
    createTimer: function (timer) {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    },
    deleteTimer: function (timerId) {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId),
        });
    },
    updateTimer: function (attrs){
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, { //ES6: assign new values of properties
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            })
        });
    },
    render: function (){
        return (
            <div className ='timer-dashboard'>
                <div className='timers'>
                    <ToggleableTimerForm 
                        onFormSubmit={this.hundleCreateFormSubmit}
                    />
                    <EditableTimerList 
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                </div>
            </div>
        );
    },
});


ReactDOM.render(
    <TimerDashboard />,
    document.getElementById('content')
);
