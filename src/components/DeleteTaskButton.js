import React from 'react';

export default function DeleteTaskButton({onClick}) {

      return (
    <div className="col-1">
    <button
    className =" mt-2 btn btn-warning material-icons"
    onClick ={()=>onClick()}
    >delete</button>
</div>
  );
}
