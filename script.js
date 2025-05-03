function showContent(page) {
      const content = document.getElementById('content');
        const title = document.getElementById('page-title');

          title.textContent = capitalize(page);

            if (page === 'analytics') {
                content.innerHTML = `
                      <div class="card">
                              <canvas id="myChart"></canvas>
                                    </div>`;
                                        drawChart();
                                          } else {
                                              let text = 'Welcome to the admin dashboard!';
                                                  if (page === 'users') text = 'Total users: 1,250 active.';
                                                      if (page === 'settings') text = 'Settings panel (dark mode, preferences)';
                                                          content.innerHTML = `<div class="card">${text}</div>`;
                                                            }
                                                            }

                                                            function drawChart() {
                                                              const ctx = document.getElementById('myChart').getContext('2d');
                                                                new Chart(ctx, {
                                                                    type: 'line',
                                                                        data: {
                                                                              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                                                                                    datasets: [{
                                                                                            label: 'Visits',
                                                                                                    data: [120, 190, 300, 250, 420],
                                                                                                            backgroundColor: 'rgba(0, 173, 181, 0.2)',
                                                                                                                    borderColor: 'rgba(0, 173, 181, 1)',
                                                                                                                            borderWidth: 2,
                                                                                                                                    fill: true,
                                                                                                                                            tension: 0.4
                                                                                                                                                  }]
                                                                                                                                                      },
                                                                                                                                                          options: {
                                                                                                                                                                responsive: true,
                                                                                                                                                                      scales: {
                                                                                                                                                                              y: {
                                                                                                                                                                                        beginAtZero: true
                                                                                                                                                                                                }
                                                                                                                                                                                                      }
                                                                                                                                                                                                          }
                                                                                                                                                                                                            });
                                                                                                                                                                                                            }

                                                                                                                                                                                                            function capitalize(str) {
                                                                                                                                                                                                              return str.charAt(0).toUpperCase() + str.slice(1);
                                                                                                                                                                                                              }

                                                                                                                                                                                                              function toggleDarkMode() {
                                                                                                                                                                                                                document.body.classList.toggle('dark');
                                                                                                                                                                                                                }
}