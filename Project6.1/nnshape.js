class ShapeRecognizer {
    constructor() {
      // инициализация весов нейросети
      this.weights = [
        // веса для круга
        [1, 1, 1, 1, 1,
         1, 0, 0, 0, 1,
         1, 0, 0, 0, 1,
         1, 0, 0, 0, 1,
         1, 1, 1, 1, 1],
        // веса для квадрата
        [1, 1, 1, 1, 1,
         1, 0, 0, 0, 1,
         1, 0, 0, 0, 1,
         1, 0, 0, 0, 1,
         1, 1, 1, 1, 1],
        // веса для треугольника
        [0, 0, 1, 0, 0,
         0, 1, 0, 1, 0,
         1, 0, 0, 0, 1,
         1, 1, 1, 1, 1,
         0, 0, 0, 0, 0]
      ];
    }
  
    // метод для распознавания фигуры
    predict(shape) {
      // преобразуем матрицу 5x5 в одномерный массив
      const input = shape.flat();
  
      // вычисляем сумму произведений входных значений и весов для каждой фигуры
      const outputs = this.weights.map((weights) => {
        return input.reduce((sum, value, index) => {
          return sum + value * weights[index];
        }, 0);
      });
  
      // выбираем выходное значение, соответствующее фигуре с наибольшим значением
      const maxOutputIndex = outputs.indexOf(Math.max(...outputs));
  
      // возвращаем строку с названием распознанной фигуры
      if (maxOutputIndex === 0) {
        return 'круг';
      } else if (maxOutputIndex === 1) {
        return 'квадрат';
      } else {
        return 'треугольник';
      }
    }
  }
  
  // пример использования нейросети
  const recognizer = new ShapeRecognizer();
  const shape = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
    ];
    const recognizedShape = recognizer.predict(shape);
    console.log(recognizedShape); // выводит "треугольник"