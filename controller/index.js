class AppController {
  // Since no database is being used, all the data is being stored directly in this class. it can be optimize to use a database
  safetyInfo = [
    {
      id: "1",
      imageUrl: "/images/contrast.png",
      alt: "MRI Contrast",
      description:
        "Magnetic Resonance Imaging (MRI) contrast injection involves the use of a contrast agent to enhance the visibility of certain tissues and blood vessels during an MRI scan.",
      title: "MRI Contrast Injection",
      content: [
        "Magnetic Resonance Imaging - MRI contrast injection involves the use of a contrast agent to enhance the visibility of certain tissues and blood vessels during an MRI scan.",
        "The most commonly used contrast agents for MRI scans contain a substance called Gadolinium. Gadolinium contrast agents are generally safe and well-tolerated by patients, but there are some risks associated with their use, particularly in people with kidney problems.",
        "During the MRI scan, the contrast agent travels through the bloodstream and into the tissues being imaged. This helps to create a clearer and more detailed image of the area being examined. The contrast agent is eventually eliminated from the body through the kidneys.",
        "The decision to use contrast injection during an MRI scan is usually made by a radiologist or a referring physician based on the patient's medical history and the specific imaging needs.",
      ],
    },

    {
      id: "2",
      imageUrl: "/images/warning sign.png",
      alt: "Warning Sign",
      description:
        "MRI is generally considered a safe and non-invasive imaging technique. However, there are some safety concerns associated with the use of MRI, particularly for patients with implants or devices in their bodies.",
      title: "Patient Safety",
content:[
  "Cardiac Pacemakers: MRI scans are generally not recommended for people with pacemakers unless the pacemaker is specifically designed to be MRI conditional. MRI conditional means that pacemaker has been designed and tested to be safe for use during MRI scans under certain conditions which must be met before scanning. The strong magnetic fields involved in MRI can interfere with the function of a pacemaker or cause heating of the device which can ause serious health complications for the patient. For this reason, If a person with a pacemaker needs an MRI scan, their doctor will evaluate the specific pacemaker and MRI machine being used and determine whether it is safe to proceed with the scan.",
  "Cardiac Reveal Devices: Like pacemakers, MRI scans can pose a risk to the function of cardiac reveal devices. The strong magnetic fields of an MRI machine can interfere with the function of the device or cause heating of the device, which can potentially cause serious injuries. However, some cardiac reveal devices are designed and tested to be MRI conditional, which means they can be safely used during MRI scans under certain conditions. If a person with a cardiac reveal device needs an MRI scan, their doctor will evaluate the specific device and MRI machine being used and determine whether it is safe to proceed with the scan. In some cases, the person may need to have their cardiac reveal device reprogrammed before the scan, hence, it is important for people with implantable cardiac devices to inform their healthcare providers about their device before undergoing the MRI scan.",
  "Brain Implants: Brain implants such as deep brain stimulators, cochlear implants or neural prostheses, aneurysm clip, hydrocephalus shunts, can potentially interact with MRI (magnetic resonance imaging) machines and cause interference or damage to both the implant and the MRI equipment. For example, deep brain stimulators used for treating Parkinson's disease or epilepsy, may be considered MRI-conditionals under certain conditions. However, other types of implants, such as cochlear implants or neural prostheses, may not be compatible with MRI at all. Additionally, some implants may heat up during an MRI, which can cause tissue damage or other complications. Overall, the safety of brain implants during MRI depends on several factors, and it's important to discuss your specific situation with your healthcare provider and MRI Radiographer.",
  "Titanium Implants: Titanium implants are generally used for all joints replacements, as well as joint plates and screws. These implants are generally considered safe and effective for most patients, hence,  the presence of a titanium implant should not prevent a patient from undergoing an MRI, and the majority of patients with these implants can safely undergo the procedure.  While titanium is not magnetic, it is still capable of producing artifacts or distortions in MRI images. This can make it more difficult for healthcare professionals to interpret the images and diagnose any underlying medical conditions. It is important for patients with titanium implants to inform their healthcare provider before undergoing an MRI. This will allow the provider to assess the risks and take any necessary steps to ensure the safety and accuracy of the imaging procedure."
]
    },
    {
      id: "3",
      imageUrl: "/images/claustrophobia.png",
      alt: "claustrophobia",
      description:
        "MRI can be a stressful experience for some people, particularly those who suffer from claustrophobia or anxiety. Claustrophobia is the fear of enclosed or tight spaces, and some patients may feel anxious or uncomfortable in the narrow,enclosed space of an MRI scanner.",
      title: "Claustrophobia & Anxiety",
      content: [
        "MRI can be a stressful experience for some people, particularly those who suffer from claustrophobia or anxiety. Claustrophobia is the fear of enclosed or tight spaces, and some patients may feel anxious or uncomfortable in the narrow, enclosed space of an MRI scanner.",
        "There are several strategies that can help alleviate anxiety and claustrophobia during an MRI scan. Many MRI facilities offer open MRI scanners, which are less enclosed and may be a more comfortable option for patients with claustrophobia.",
        "Another strategy is to distract patients during the scan, such as by providing music,or audiobooks.",
        "It is important for patients to communicate with their healthcare providers about any concerns they may have about the MRI scan. Healthcare providers can provide support and guidance to help patients manage anxiety and claustrophobia during the procedure.",
      ],
    },
  ];

  mriOverview = [
    {
      id: "4",
      imageUrl: "/images/mri scanner.png",
      alt: "MRI Scanner",
      description:
        "MRI stands for Magnetic Resonance Imaging. It is a medical imaging technique that uses a strong magnetic field and radio waves to generate detailed images of the inside of the body.",
      title: "What is MRI",
      content: [
        " MRI stands for Magnetic Resonance Imaging. It is a medical imaging technique that uses a strong magnetic field and radio waves to generate detailed images of the inside of the body. This makes the MRI different from ionizing radiation based modalities such as X-Ray and Computed Tomography (CT)",
        " MRI machines create high-resolution images of the body's internal structures, including organs, tissues, and bones, without the use of X-rays.",
        " MRI is a non-invasive diagnostic tool and is often used to diagnose a wide range of medical conditions, including neurological disorders, joint and muscle problems, and cancer. It is also used to monitor the progress of treatment and to guide surgical procedures.",
        " This can help your physician make a diagnosis and recommend the best treatment options for your condition.",
        " MRI is a safe and painless procedure, although patients with metal implants or devices may not be able to undergo the test due to safety concerns.",
        " If you have any metal implant or medical device implanted in your body, be sure to communicate it to your healthcare provider before proceeding to have your scan.",
      ],
    },
    {
      id: "5",
      imageUrl: "/images/neck image.png",
      alt: "MRI image",
      description:
        "The Magnetic Resonance Imaging (MRI) machine contains a powerful magnet that generates a strong magnetic field around the patient's body to produce detailed images of internal structures of the body. MRI does not use radiations in its mode of operation.",
      title: "How MRI Works",
    },
    {
      id: "6",
      imageUrl: "/images/pt prep.png",
      alt: "Patient Preparation",
      description:
        "If you have an MRI appointment, there are a few things you can do to prepare for the procedure. MRI scans typically take between 30 and 60 minutes, depending on the area of the body being scanned.",
      title: "Preparing For Your Scan",
      content: [
        "Avoid wearing jewelry and metal objects: Metal objects can interfere with the MRI and cause inaccurate results. Remove all metal objects before your MRI, including jewelry, piercings, and hair accessories.",
        "Wear comfortable clothing: Wear comfortable, loose-fitting clothing without any metal zippers, buttons, or snaps. You may also be given a hospital gown to wear during the scan.",
        "Discuss any concerns with your doctor: If you have any concerns about the MRI, such as claustrophobia, anxiety, or discomfort lying still for an extended period, talk to your healthcare. They may be able to offer solutions to make you more comfortable or offer alternative imaging methods.",
        "Be sure to arrive on time for your appointment, as being late may cause unnecessary stress and delay the scan.",
      ],
    },
  ];

  // using this controller to return the data needed for the home page
  getHomePageData = (req, res) => {
    // fetch and map all mri safety info for serialization purposes
    const safetyInfos = this.safetyInfo.map((item) => ({
      imageUrl: item.imageUrl,
      alt: item.alt,
      description: item.description,
      title: item.title,
      hasContent: item.content?.length ? true : false,
      id: item.id,
    }));

    // fetch and map all mri overview info for serialization purposes
    const mriInfos = this.mriOverview.map((item) => ({
      imageUrl: item.imageUrl,
      alt: item.alt,
      description: item.description,
      title: item.title,
      hasContent: item.content?.length ? true : false,
      id: item.id,
    }));

    // return data
    res.status(200).json({ safetyInfos, mriInfos });
    return;
  };

  // using this controller to get the detail of a particular information that will be shown on the detail page
  getDetailInfo = (req, res) => {
    const param = req.params;
    // get the id of the detail intended to be fetched
    const id = param.detail_id;
    // merge all the infos
    const allInfo = [...this.safetyInfo, ...this.mriOverview];

    // fetch the info
    const infoItem = allInfo.find((item) => item.id == id);

    // check if the info does not exist and return an error response
    if (!infoItem) {
      res.status(404).json({ message: "Not Found" });
      return;
    }

    // serialize data
    const infoRes = {
      title: infoItem.title,
      imageUrl: infoItem.imageUrl,
      alt: infoItem.alt,
      content: infoItem.content,
    };

    // return data
    res.status(200).json({ item: infoRes });
    return;
  };

  // using this controller to validate if a patient is safe for an mri examination
  validatePatientValidity = (req, res) => {
    const body = req.body;
    // obtaining the answer from the body that was submitted
    const answers = body.answers;

    // checking if there is any yes in the form questions
    const isNotEligible = answers.some((val) => val == "yes");

    if (isNotEligible) {
      // if not eligible, a response that say the exams can not be done is sent to user
      res.status(400).json({
        message:
          "Please it is NOT advisable to have your MRI scan done. This is because you answered YES to one or more of the above questions. Contact your healthcare provider as soon as possible.",
        status: "error",
      });
      return;
    } else {
      // return valid response if patient is eligible
      res.status(200).json({
        message: "It is perfectly safe to have your MRI scan done.",
        status: "success",
      });
    }

    return;
  };
}

export default new AppController();
