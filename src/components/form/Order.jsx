import { Form, Input, Radio } from "antd";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import DateTimePicker from "./DatePicker";
import Counter from "./Counter";

const { TextArea } = Input;

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  //categories
  const categories = [
    {
      title: "Standard",
      description: "Standard Price writers",
    },
    {
      title: "Premium",
      description:
        "High-rank writer, proficient in the requested field of study",
    },
    {
      title: "Platinum",
      description:
        "English as a native language writer (US, UK, CA, AU writers)",
    },
  ];
  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  // Define an array of options
  const options = [
    "Essay (Any)",
    "ANNOTATED BIBLIOGRAPHY",
    "DISSERTATION",
    "RESEARCH PAPERS",
    "DISCUSSION POSTS + 2 REPLIES",
    "ADMISSION ESSAY",
    "QUIZES AND HOMEWORK",
    "DISCUSSION POSTS",
    "EXAMS",
    "PRESENTATION/PPT",
    "ESSAYS (Any Type)",
  ];

  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to render Select options
  const renderOptions = () => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  //subject options
  const subjects = [
    "Other",
    "Biology",
    "Business",
    "Chemistry",
    "Discussion Posts",
    "Economics",
    "English",
    "History",
    "Mathematics",
    "Nursing",
    "Others",
    "Research methods",
    "Statistics",
  ];
  const [subjectOption, selectedSubject] = useState(subjects[0]);
  //function to handle subject selection
  const handleSubjectSelect = (subject) => {
    selectedSubject(subject);
  };
  //function to render select subject
  const renderSubject = () => {
    return subjects.map((subject) => (
      <option key={subject} value={subject}>
        {subject}
      </option>
    ));
  };

  //file upload
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="container mb-10">
      <div className="my-2">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "#32415b", letterSpacing: 2 }}
        >
          PLACE AN ORDER
        </h1>
        <p className="my-2">Its fast, secure, and confidential</p>
        <hr className="w-1/2" />
      </div>

      <Form className="container ml-4">
        <Form.Item label="Type of Paper">
          <div className="relative">
            <select
              className="block w-full bg-white border border-gray-300 p-2 rounded-lg focus:outline-none "
              value={selectedOption}
              onChange={(e) => handleOptionSelect(e.target.value)}
            >
              {renderOptions()}
            </select>
          </div>
        </Form.Item>

        <Form.Item label="Academic Level">
          <Radio.Group>
            <Radio.Button value="highschool">High School</Radio.Button>
            <Radio.Button
              value="college"
              style={{ background: "#32415b", color: "white" }}
            >
              college
            </Radio.Button>
            <Radio.Button value="phd">PhD</Radio.Button>
            <Radio.Button value="masters">Masters</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Subject">
          <div className="relative">
            <select
              className="block w-full bg-white border border-gray-300 p-2 rounded-lg focus:outline-none "
              value={subjectOption}
              onChange={(e) => handleSubjectSelect(e.target.value)}
            >
              {renderSubject()}
            </select>
          </div>
        </Form.Item>
        <Form.Item label="Title">
          <Input
            type="text"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <p>{title}</p>
        <Form.Item label="Instructions">
          <TextArea
            rows={4}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </Form.Item>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Uploaded Files</h2>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
        <div
          {...getRootProps()}
          className="border border-dashed border-gray-400 p-2 text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          <p className="text-gray-600">Drag files here or click to browse</p>
        </div>

        <Form.Item label="Paper format" className="my-4">
          <Radio.Group>
            <Radio.Button value="mla">MLA</Radio.Button>
            <Radio.Button
              value="college"
              style={{ background: "#32415b", color: "white" }}
            >
              APA
            </Radio.Button>
            <Radio.Button value="phd">Havard</Radio.Button>
            <Radio.Button value="chicago">Chicago/Turabian</Radio.Button>
            <Radio.Button value="others">Other</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {/* counter */}
        <div className="flex mb-2">
          <p>Number of Pages</p>
          <Counter />
        </div>
        <p className="mb-2 px-10">Approx; 275 words</p>
        <Form.Item label="Currency">
          <Radio.Group>
            <Radio.Button
              value="mla"
              style={{ background: "#32415b", color: "white" }}
            >
              USD
            </Radio.Button>
            <Radio.Button value="college" labeled>
              GBP
            </Radio.Button>
            <Radio.Button value="phd">EUR</Radio.Button>
            <Radio.Button value="masters">AUD</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* counter */}
        {/* counter */}
        <div className="flex mb-2">
          <p>Number of Sources</p>
          <Counter />
        </div>
        <div className="flex mb-2">
          <p>Powerpoint Slides</p>
          <Counter />
        </div>
        <div className="flex mb-2">
          <p>Charts</p>
          <Counter />
        </div>
        {/* counter */}
        {/* dateTimePicker */}
        <DateTimePicker />
        {/* dateTimePicker */}
        {/* category */}
        <div className="flex">
          <p className="w-1/4">Category</p>
          <div className="flex flex-row space-y-4 border border-gray-300 rounded-lg">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`p-4 border  ${
                  selectedCategory === index ? "bg-gray-700" : ""
                } cursor-pointer`}
              >
                <h2 className="text-lg font-semibold ">{category.title}</h2>
                <hr />
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* category */}
        <div className="mb-2 flex">
          <p className="mr-10">Specials:</p>
          <div
            className="flex px-4 justify-between border border-gray-300 rounded-lg bg-gray-200"
            style={{ height: "150px" }}
          >
            <img src="" alt="image" />
            <div className="w-1/2 pt-2">
              <h5>Get 2nd version from another top writer 25% cheaper</h5>
              <p>
                Two writers will create different versions of the same paper.
                2nd goes for 75% of the price. Keep both or share one with a
                friend.
              </p>
            </div>
            <input type="checkbox" className="form-checkbox text-gray-500" />
          </div>
        </div>
        <div className="flex">
          <p className="w-1/4 pr-0.5">Additional Services</p>
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-2 py-2 px-4 border border-gray-300 rounded-lg h-2/5">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-500"
                />
                <span className="text-lg font-semibold">
                  Get Writer Samples
                </span>
              </label>
              <span className="text-xl font-bold ">$5</span>
            </div>
            <div className="flex items-center justify-between mb-2 py-2 px-4 border border-gray-300 rounded-lg h-2/5">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-500"
                />
                <span className="text-lg font-semibold">
                  Progressive Delivery
                </span>
              </label>
              <span className="text-xl font-bold">$15</span>
            </div>
            <div className="flex items-center justify-between py-2 px-4 border border-gray-300 rounded-lg h-2/5">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-500"
                />
                <span className="text-lg font-semibold">Plagirism report</span>
              </label>
              <span className="text-xl font-bold">$23</span>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Order;
