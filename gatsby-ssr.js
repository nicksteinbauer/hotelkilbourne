import React from 'react';

const HeadComponents = [<script key="jquery" src="https://code.jquery.com/jquery-3.6.0.min.js"  />];

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

export { onRenderBody };