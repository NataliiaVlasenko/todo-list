import React from 'react';

export default function Badge({tasks}) {
  return (
    <h2>
      <div className="badge badge-secondary">
        You have
        {!tasks.length
          ? " nothing to buy"
          : tasks.length === 1
          ? " 1 purchase"
          : tasks.length > 1
          ? ` ${tasks.length} purchases`
          : null}
      </div>
      </h2>
  );
}
