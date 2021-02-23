import React from "react";
import PropTypes from "prop-types";

const CommentForm = ({
  commentFormPlaceholder,
  commentFormType,
  commentId,
  commentPreviewText,
  commentPublishText,
  nodeId
}) => {

  // HTML attributes for <form> tag
  const formId = commentFormType === "main" ?
    "main" : 
    commentFormType + "-" + commentId;
  const formClass = commentFormType === "edit" ?
    "edit-comment-form well" : 
    "comment-form";
  const formAction = commentFormType === "edit" ?
    "/update/" + commentId :
    "/create/" + nodeId;

  // comment form's title text
  let formTitle = "Post Comment";
  if (commentFormType === "edit") {
    formTitle = "Edit Comment";
  } else if (commentFormType === "reply") {
    formTitle = "Reply to This Comment";
  }

  return (
    <div
      id={"comment-form-wrapper-" + formId}
      className="bg-light card card-body comment-form-wrapper"
      style={{
        backgroundColor: "#f8f8f8",
        border: "1px solid #e7e7e7",
        padding: "36px"
      }}
    >
      {/* data-remote="true" means the form is submitted with AJAX */}
      {/* see https://guides.rubyonrails.org/working_with_javascript_in_rails.html#remote-elements */}
      <form 
        id={"comment-form-" + formId}
        className={formClass}
        action={formAction}
        data-remote="true"
        method="post"
      >
        <h4>{formTitle}</h4>
        {/* placeholder: form_authenticity_token */}
        {/* placeholder: hidden_field_tag :reply_to */}
        <div
          id={"comment-form-body-" + commentId}
          className="comment-form-body dropzone dropzone-large form-group"
        >
          {/* placeholder: new contributor message for non-edit form */}
          {/* placeholder: textarea below needs an aria-label attribute*/}
          <textarea
            id={"text-input-" + commentId}
            className="form-control text-input"
            name="body"
            cols="40"
            rows="6"
            style={{
              border: "1px solid #bbb",
              borderBottom: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              padding: "10px"
            }}
            placeholder={commentFormPlaceholder}
          ></textarea>
          {/* placeholder: image upload elements */}
        </div>
        {/* placeholder: comment preview section */}
        <div className="control-group">
          <button
            type="submit"
            className="btn btn-primary"
          >
            {commentPublishText}
          </button>
          &nbsp;
          <a
            id={"toggle-preview-button-" + formId}
            className="btn btn-default btn-outline-secondary preview-btn"
          >
            {commentPreviewText}
          </a>
        </div>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  commentId: PropTypes.number,
  commentFormPlaceholder: PropTypes.string,
  commentFormType: PropTypes.string,
  commentPreviewText: PropTypes.string,
  commentPublishText: PropTypes.string,
  nodeId: PropTypes.number
};

export default CommentForm;