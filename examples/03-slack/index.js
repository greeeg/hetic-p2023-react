import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Workspaces } from './Workspaces';
import { Sidebar } from './Sidebar';
import { Chat } from './Chat';

const App = () => (
  <div class="font-sans antialiased h-screen flex">
    <Workspaces />
    <Sidebar />
    <Chat />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
