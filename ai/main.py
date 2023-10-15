import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
import json
import random
from multiprocessing import Process, Queue


def task():
    with open('offices.json', 'r', encoding='utf-8') as fh:  # открываем файл на чтение
        data = json.load(fh)

    print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
    # Преобразование данных в массивы numpy

    for d in data:
        d['traffic'] = random.randint(1, 11)
    traffic = np.array([d['traffic'] for d in data])
    distance = np.array([d['distance'] for d in data])
    # Нормализация данных
    traffic_normalized = (traffic - np.min(traffic)) / (np.max(traffic) - np.min(traffic))
    distance_normalized = (distance - np.min(distance)) / (np.max(distance) - np.min(distance))
    # Создание обучающей выборки
    X_train = np.column_stack((traffic_normalized, distance_normalized))
    # Создание меток классов
    y_train = np.arange(len(data))
    # Создание модели нейронной сети
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(32, activation='relu', input_shape=(2,)),
        tf.keras.layers.Dense(32, activation='relu'),
        tf.keras.layers.Dense(len(data), activation='sigmoid')
    ])
    # Компиляция модели
    model.compile(optimizer='adam',
                  loss=tf.keras.losses.SparseCategoricalCrossentropy(),
                  metrics=['accuracy'])
    # Обучение модели
    history = model.fit(X_train, y_train, epochs=40000, verbose=1)
    # Вывод графика процесса обучения
    plt.plot(history.history['accuracy'])
    plt.title('Model Accuracy')
    plt.xlabel('Epoch')
    plt.ylabel('Accuracy')
    plt.show()
    # Предсказание оптимального отделения
    X_test = np.array([[15, 25], [10, 20], [5, 102], [50, 10], [53, 104], [53, 10], [58, 16], [22, 130], [7634, 1023]])
    X_test_normalized = (X_test - np.min(traffic)) / (np.max(traffic) - np.min(traffic))
    y_pred = model.predict(X_test_normalized)
    optimal_department = data[np.argmax(y_pred)]
    optimal_department = optimal_department['salePointName']
    print("Оптимальное отделение для посещения: ", optimal_department)

if __name__ == '__main__':
    p = Process(target=task)
    p.start()
    p.join()
