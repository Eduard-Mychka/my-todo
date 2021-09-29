import React, { Component } from 'react';
import Input from './Input';

export default class TodoItem extends Component {

  state = {
    inputValue: this.props.item.title,
    isEdit: false,
  }

  onEdit = () => this.setState({ isEdit: true });
  handleClose = () => this.setState({ inputValue: this.props.item.title, isEdit: false });
  handleInputChange = (e) => this.setState({ inputValue: e.target.value });
  handleSave = () => {
    this.props.onClickEdit(this.props.item.id, this.state.inputValue)
    this.setState({ isEdit: false })
  };

  myRef = React.createRef();
  onRemove = () => {
    this.myRef.current.className = "active";
    setTimeout(() => {
      this.props.onClickDelete(this.props.item.id);
    }, 300)
  }


  render() {
    const { item, onDone } = this.props;
    let classNames = '';
    if (item.done) { classNames = 'done' };

    return (
      <li ref={this.myRef} className="list-group-item">
        <div className="item">
          {!this.state.isEdit && (
            <span className={classNames}>
              <div className="flex-param">
                <div>
                  <input className="input-checkbox form-check-input" type="checkbox" checked={item.done} onChange={() => onDone(item.id)} />
                  {item.title}
                </div>
                <div>
                  <div className="item-icons">
                    <i className="fas fa-edit item-icon edit" onClick={this.onEdit} title="Edit" />
                    <i className="fas fa-trash-alt item-icon trash" onClick={this.onRemove} title="Delete" />
                  </div>
                </div>
              </div>
            </span>
          )}

          {this.state.isEdit && (
            <form className="flex-param" onSubmit={this.handleSave} onReset={this.handleClose}>
              <div>
                <Input className="input-save-edit" value={this.state.inputValue} onChange={this.handleInputChange} />
              </div>
              <div>
                <button type="submit" className="save-button">
                  <i className="icon-save-edit fa fa-check" title="Save" />
                </button>
                <button type="reset" className="save-button">
                  <i className="icon-save-edit fa fa-times" title="Close" />
                </button>
              </div>
            </form>
          )}
        </div>
      </li>
    )
  }
};

