export default function ValidationError(messages) {
  this.name = 'ValidationError';
  this.messages = messages;
}
