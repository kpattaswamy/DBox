import React, {FormEvent} from 'react';
import {render} from 'react-dom';
import { MyS3Auth } from './class_awsS3_auth';
// import { S3 } from "aws-sdk"
// import { S3Auth } from './aws_s3_upload';
  
interface AWS3Keys extends HTMLFormControlsCollection {
  accessKey: HTMLInputElement;
  secretAccessKey: HTMLInputElement;
  bucketName: HTMLInputElement;
}

interface AWSAuthForm extends HTMLFormElement {
  readonly elements: AWS3Keys;
}


export const GetS3Keys = () => {
  const onSubmit = (event: FormEvent<AWSAuthForm>) => {
      //Prevent Default so that the event can be recorded in console
      event.preventDefault();

      const target = event.currentTarget.elements;

      //User's keys for AWS S3
      const awsS3Keys = {
          accessKey: target.accessKey.value,
          secretAccessKey: target.secretAccessKey.value,
          bucketName: target.bucketName.value
      };

      console.log(awsS3Keys);

      let myClass = new MyS3Auth(awsS3Keys.accessKey, awsS3Keys.secretAccessKey, awsS3Keys.bucketName);
      myClass.checkValidUser()
  };

  return (
      <form className="form" onSubmit={onSubmit}>
          <div className="field">
              <label htmlFor="accessKey">AWS S3 Access key</label>
              <input type="text" id="accessKey" />
          </div>
          <div className="field">
              <label htmlFor="secretAccessKey">AWS S3 Secret Access Key</label>
              <input type="text" id="secretAccessKey" />
          </div>
          <div className="field">
              <label htmlFor="bucketName">AWS S3 Bucket Name</label>
              <input type="text" id="bucketName" />
          </div>
          <button type="submit">Configure</button>
      </form>
  );
};

render(<GetS3Keys/>, document.getElementById("awsS3Auth"));