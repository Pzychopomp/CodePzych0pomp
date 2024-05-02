import NavigationBar from './components/navbar';

function SkillsPage() {
  return (
    <div>
      <NavigationBar />
      <main style={{ paddingTop: '60px' }}>
        <h1>Skills</h1>
        <p>Here are my skills:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          {/* Add more skills here */}
        </ul>
      </main>
    </div>
  );
}

export default SkillsPage;
