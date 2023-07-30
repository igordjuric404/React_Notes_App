export default function ContactSuccess({ formData }) {
  return (
    <div>
      <h2>Thank you for contacting us!</h2>
      <p>
        Your information has been received. Here are the details you provided:
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Question</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.email}</td>
            <td>{formData.question}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
