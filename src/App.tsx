import './App.css';
import { Rankings } from './components';

function App() {
  return (
    <>
      <h1>CFB Power Rankings Generator</h1>
      <p className="instructions">
        Click a checkbox to include that stat in your power rankings. Use the slider to adjust the
        weight that you want to give to that stat. Then click on the "Generate Power Rankings:
        button. This will generate a power ranking score for each team. The score is based on the
        team's percentile score in each selected state multiplied by the weight. Stats that would be
        considered negative (e.g. "Passing Success Rate Allowed") are multiplied by -1. Click the
        heading of the "Power Ranking Score" column to sort by your generated power ranking scores.
        See the
        {
          <a href="https://collegefootballdata.com/glossary" target="_blank">
            College Football Data Glossary
          </a>
        }
        for explanations of the stats.
      </p>
      <Rankings />
    </>
  );
}

export default App;
