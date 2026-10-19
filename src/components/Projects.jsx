function Projects() {

const projects = [
    { id: 1, title: 'Project 1', category: 'web' },
    { id: 2, title: 'Project 2', category: 'mobile' },
    { id: 3, title: 'Project 3', category: 'web' },
    { id: 4, title: 'Project 4', category: 'mobile' },
  ]
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)


  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('web')}>Web</button>
        <button onClick={() => handleFilterChange('mobile')}>Mobile</button>
      </div>
      <div className="project-list">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>Category: {project.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects