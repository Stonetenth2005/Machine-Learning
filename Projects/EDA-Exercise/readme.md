# **Telecom Customer Churn — EDA Exercise**

## **Overview**

This dataset simulates real-world customer behavior for a telecom company.
Your task is to perform **Exploratory Data Analysis (EDA)** to understand customer behavior, identify churn patterns, and create actionable business insights.

No machine learning is required — this is a pure **EDA, reasoning, and storytelling** exercise.

---

## **Dataset Description**

**Rows:** ~5500
**Columns:** 18

**Domains included:**
Demographics, city tier, billing behavior, service usage, complaints, service rating, subscription addons, and churn outcome.

---

# **Instructions**

1. Load the dataset into your preferred tool (Python, Gemini, Excel, Tableau, PowerBI, etc.).
2. Follow the EDA sections in order.
3. Visualize relationships whenever necessary.
4. Present your insights clearly and professionally.

---

# **Part 1 — Basic Data Understanding**

## **1.1 Dataset Structure**

* Number of rows & columns
* Data types
* Identify categorical vs numerical features

## **1.2 Missing Values**

* Columns with missing values
* Missing percentages
* Whether missingness is random or patterned
* Suggested imputation strategy (with reasoning)

## **1.3 Data Quality Checks**

Check for:

* Outliers (age, monthly_charge, complaints, tenure)
* Impossible/illogical values
* Contradictions

  * Example: `internet_service = "None"` but `subscription_addons > 0`

---

# **Part 2 — Univariate Analysis**

## **2.1 Numerical Features**

Analyze:
`age`, `tenure_months`, `monthly_charge`, `total_charge`, `complaints_last_6m`, `service_score`

Tasks:

* Distribution shape (normal, skewed, etc.)
* Outliers
* Summary statistics

## **2.2 Categorical Features**

Analyze:
`gender`, `city_tier`, `internet_service`, `contract_type`, `payment_method`, `is_student`, `is_senior_citizen`

Tasks:

* Value counts
* Category imbalance analysis

---

# **Part 3 — Bivariate Analysis (with Churn)**

## **3.1 Categorical Features vs Churn**

Compare churn rates across:

* Contract type
* Internet service
* Payment method
* City tier
* Senior citizen status
* Student status

## **3.2 Numerical Features vs Churn**

Analyze:

* Tenure
* Monthly charge
* Complaints
* Service score

## **3.3 Correlations**

Study relationships such as:

* Tenure ↔ total_charge
* Monthly_charge ↔ service_score
* Complaints ↔ churn

---

# **Part 4 — Moderate-Level Exploration**

## **4.1 Manual Customer Segmentation**

Create segments such as:

* High charge + low tenure
* High complaints
* Low service score
* Fiber + month-to-month contract users

For each segment, report:

* Segment size
* Churn rate
* Key behavioral traits

## **4.2 Combination Analysis**

Answer:

* Do "Month-to-month + Fiber + High monthly charge" users churn the most?
* Which contract + payment method pair shows lowest churn?
* Are senior citizens more price-sensitive?
* Which city tier shows abnormal patterns?

---

# **Part 5 — Analytical Questions**

Provide concise, reasoning-based answers to:

1. Which feature is most strongly associated with churn?
2. Do high-paying customers churn more?
3. Is churn strongly linked to low tenure?
4. Are complaints a cause or a symptom of churn?
5. Does student behavior differ from non-students?
6. Who churns more—Fiber or DSL users?
7. Which city tier has the highest churn?
8. Are high-revenue customers also high-risk?

---

# **Part 6 — Final Deliverables**

## **6.1 Top 10 Insights**

Summarize the most important insights discovered.

## **6.2 Customer Personas (3–5)**

Example persona formats:

* “Young Fiber users with high bills and high churn risk”
* “Senior DSL users with long tenure and low churn”

## **6.3 Recommendations**

Provide business recommendations around:

* Pricing
* Retention strategy
* Contract optimization
* Service improvement
* Targeted customer communication

---
