# 🚀 Tech Stack Builder

A simple and interactive React application where users can explore different web technologies and build their own technology stack.

Users can add technologies to their stack, remove individual technologies, or remove all selected technologies at once.

---

## 📝 Description

**Tech Stack Builder** is a React-based project that helps users explore different technologies and create their own preferred technology stack.

The project loads technology information from a JSON file and displays each technology in a reusable card. Users can select technologies and manage their selected stack from the cart section.

Toast notifications are also used to give users feedback when technologies are added or removed.

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* JSON
* Vite

---

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore different technologies with information such as:

* Technology name
* Category
* Description
* Difficulty
* Rating
* Technology icon
* Badge

### 2. ➕ Build Your Own Stack

Users can add technologies to their personal stack.

The selected technologies are displayed in the **Your Stack** section along with the total number of selected technologies.

### 3. 🗑️ Manage Your Stack

Users can:

* Remove a single technology
* Remove all selected technologies
* See an empty-stack message when nothing is selected
* Get toast notifications when technologies are added or removed

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes UI code easier to read and write.

Example:

```tsx
<h1>Hello React</h1>
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, `technology` is passed to `TechnologyCard` as a prop, while `addedTechnology` is managed as state in `TechnologiesContainer`.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state in a component.

I used `useState` in `TechnologiesContainer` to store the selected technologies.

```tsx
const [addedTechnology, setAddedTechnology] =
    useState<TechnologyType[]>([]);
```

When a technology is added or removed, the state is updated and the UI changes automatically.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data, working with APIs, or interacting with external systems.

In this project, I **did not need `useEffect`** to load the JSON data.

Instead, I used a Promise with React's `use()` Hook and `Suspense`.

```tsx
const technologiesPromise = loadTechnologiesPromise();
```

Then the data is read using:

```tsx
const technologies = use(loadTechnologiesData);
```

So, `useEffect` was not required for loading the JSON data in this project.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed.

In this project:

```tsx
technologies.map(
    (technology) => (
        <TechnologyCard
            key={technology.id}
            technology={technology}
        />
    )
)
```

Here, `technology.id` is used because it is unique for each technology.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

I used it in the stack section to show either the selected technologies or an empty-stack message.

```tsx
{selectedStack.length > 0 ? (
    selectedStack.map((technology) => (
        // Technology item
    ))
) : (
    <p>No items selected yet.</p>
)}
```

If there are selected technologies, they are displayed. Otherwise, the empty-stack message is shown.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

For example:

```tsx
<TechnologyCard
    technology={technology}
    handleAddedTechnologies={handleAddedTechnologies}
/>
```

Here, the parent sends `technology` and a function to the child.

The child can send something back to the parent by calling the function received through props.

```tsx
handleAddedTechnologies(technology);
```

So the basic flow is:

```text
Parent
   ↓ props
Child
   ↓ callback function
Parent
```

This allows React components to communicate with each other while keeping the main state in the parent component.
