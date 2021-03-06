import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SeleectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onRemove, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SeleectInput
        name="authorId"
        label="Author"
        value={course.author}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Removing...' : 'Delete'}
        className="btn btn-warning"
        onClick={onRemove}
      />
    </form>
  );
};

function getValidationState(course) {
  const length = course.length;
  if (length > 10) return 'success';
  else if (length > 5) return 'warning';
  else if (length > 0) return 'error';
}


CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
