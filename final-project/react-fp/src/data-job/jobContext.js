import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const JobContext = createContext();

export const RouteJobProvider = (props) => {
  let history = useHistory();
  const [jobList, setJob] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  //REST API
  const fetchData = async () => {
    let result = await axios.get(
      `https://dev-example.sanbercloud.com/api/job-vacancy`
    );
    let data = result.data;
    let output = Object.values(data.data).map((e) => {
      return {
        id: e.id,
        title: e.title,
        job_description: e.job_description,
        job_qualification: e.job_qualification,
        job_type: e.job_type,
        job_tenure: e.job_tenure,
        job_status: e.job_status,
        company_name: e.company_name,
        company_image_url: e.company_image_url,
        company_city: e.company_city,
        salary_min: e.salary_min,
        salary_max: e.salary_max,
      };
    });

    console.log(output);
    setJob(output);
  };

  //handleSubmit
  const functionSubmit = () => {
    axios
      .post(
        `https://dev-example.sanbercloud.com/api/job-vacancy`,
        {
          title: input.title,
          job_description: input.job_description,
          job_qualification: input.job_qualification,
          job_type: input.job_type,
          job_tenure: input.job_tenure,
          job_status: input.job_status,
          company_name: input.company_name,
          company_image_url: input.company_image_url,
          company_city: input.company_city,
          salary_min: input.salary_min,
          salary_max: input.salary_max,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((res) => {
        setJob([
          ...jobList,
          {
            id: res.data.id,
            title: res.data.title,
            job_description: res.data.job_description,
            job_qualification: res.data.job_qualification,
            job_type: res.data.job_type,
            job_tenure: res.data.job_tenure,
            job_status: res.data.job_status,
            company_name: res.data.company_name,
            company_image_url: res.data.company_image_url,
            company_city: res.data.company_city,
            salary_min: res.data.salary_min,
            salary_max: res.data.salary_max,
          },
        ]);
        history.push(`/Job`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //handleUpdate
  const functionUpdate = (currentIndex) => {
    axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${currentIndex}`,
        {
          title: input.title,
          job_description: input.job_description,
          job_qualification: input.job_qualification,
          job_type: input.job_type,
          job_tenure: input.job_tenure,
          job_status: input.job_status,
          company_name: input.company_name,
          company_image_url: input.company_image_url,
          company_city: input.company_city,
          salary_min: input.salary_min,
          salary_max: input.salary_max,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then(() => {
        let updatedItem = jobList.find((e) => e.id === currentIndex);

        updatedItem.title = input.title;
        updatedItem.job_description = input.job_description;
        updatedItem.job_qualification = input.job_qualification;
        updatedItem.job_type = input.job_type;
        updatedItem.job_tenure = input.job_tenure;
        updatedItem.job_status = input.job_status;
        updatedItem.company_name = input.company_name;
        updatedItem.company_image_url = input.company_image_url;
        updatedItem.company_city = input.company_city;
        updatedItem.salary_min = input.salary_min;
        updatedItem.salary_max = input.salary_max;

        setJob([...jobList]);
        history.push(`/Job`);
        console.log(updatedItem)
      });
  };
  //handleEdit
  const functionEdit = (ID_GAMES) => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        let data = res.data;
        let Obj = {
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        };
        history.push(`Job/edit/${ID_GAMES}`);
        setCurrentIndex(data.id);
        setInput(Obj);
        console.log(Obj)
      });
  };

  //handleDelete
  const functionDelete = (ID_GAMES) => {
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`,
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
      .then(() => {
        let newJob = jobList.filter((e) => {
          return e.id !== ID_GAMES;
        });

        setJob(newJob);

        console.log(newJob);
      });
  };

  const functions = {
    fetchData,
    functionDelete,
    functionSubmit,
    functionEdit,
    functionUpdate,
  };

  return (
    <JobContext.Provider
      value={{
        jobList,
        setJob,
        currentIndex,
        setCurrentIndex,
        input,
        setInput,
        functions,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};
