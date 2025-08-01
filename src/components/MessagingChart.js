import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function MessagingChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Apache Kafka', 'RabbitMQ'],
        datasets: [{
          label: 'Relative Message Throughput',
          data: [100, 45],
          backgroundColor: [
            'rgba(59, 130, 246, 0.7)',
            'rgba(255, 102, 0, 0.7)'
          ],
          borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(255, 102, 0, 1)'
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Relative Throughput (Higher is Better)',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Messaging System Throughput Comparison',
            font: {
              size: 16,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '300px', width: '100%', maxWidth: '800px', margin: '20px auto' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}