class ShapeRecognizer {
    constructor() {
      // инициализация весов нейросети
      this.weights = [
        // веса для 1
        [0, 0, 1, 0, 0,
         0, 0, 1, 0, 0,
         0, 0, 1, 0, 0,
         0, 0, 1, 0, 0,
         0, 1, 1, 1, 0],
        // веса для 2
        [1, 1, 1, 1, 1,
         0, 0, 0, 0, 1,
         1, 1, 1, 1, 1,
         1, 0, 0, 0, 0,
         1, 0, 1, 1, 1],
        // веса для 3
        [1, 1, 1, 1, 1,
         0, 0, 0, 0, 1,
         1, 1, 1, 1, 1,
         0, 0, 0, 0, 1,
         1, 1, 1, 1, 1]
        // веса для 4
         [1, 0, 0, 0, 1,
          1, 0, 0, 0, 1,
          1, 1, 1, 1, 1,
          0, 0, 0, 0, 1,
          0, 0, 0, 0, 1]
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
        return 'круг 1';
      } else if (maxOutputIndex === 1) {
        return 'квадрат 2';
      } else if (maxOutputIndex === 2){
        return 'треугольник 3';
      } else {
        return 'треугольник 4';
    }
  }
}
/*const recognizer = new ShapeRecognizer();
const shape = pixel;
const recognizedShape = recognizer.predict(shape);
console.log(recognizedShape); // выводит "треугольник"*/