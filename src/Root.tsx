import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Modal } from "./Modal";
import { Invites } from "./Invites";

interface State {
  invites: string[];
  opened: boolean;
}


export class Root extends Component<{}, State> {
  
  public readonly state: State = {
    invites: [],
    opened: false,
  };

  public toggle(opened:boolean) {

      this.setState({opened});

  }

  public invite(name: string) {
    this.setState(({ invites }) => {
      invites.push(name);

      return { invites };
    });
  }

  public render() {
    return (
      <>
        <Button variant="contained" size="large" color="primary"  onClick={() => this.toggle(true)}>Open invites list</Button>
        <Modal opened={this.state.opened}  onClose={() => this.toggle(false)}>
          <Invites
            invites={this.state.invites}
            onAdd={this.invite.bind(this)}
          />
        </Modal>
      </>
    );
  }
}
