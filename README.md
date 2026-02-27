<img width="1893" height="976" alt="Screenshot 1" src="https://github.com/user-attachments/assets/767c00cc-39ba-4e1b-85f2-6b0ae277f9f0" />

# 🟢 LifeOps – AI Personal Operations Manager

LifeOps is a multi-agent AI system that detects financial, scheduling, and commitment risks in real time and automatically generates safe, verified action plans.

Built using:
- Elasticsearch (time-series + multi-index search)
- Elastic AI Agents (5-agent architecture)
- Node.js Orchestrator Backend
- Multi-step validation pipeline

---

## 🧠 Architecture

Email → Classification Agent  
→ Risk Analyzer Agent  
→ Planner Agent  
→ Verifier Agent  
→ Action Agent  
→ Backend executes + logs in Elasticsearch  

---

## 🤖 Agents

1. **Email Classification Agent**
   - Extracts structured data from raw email
   - Categorizes into: bill, subscription, appointment, travel, reminder

2. **LifeOps Risk Analyzer**
   - Detects:
     - Bill overdue risk
     - Spending spike
     - Calendar conflict
   - Uses Elasticsearch search & aggregations

3. **Planner Agent**
   - Creates structured action plan

4. **Verifier Agent**
   - Validates:
     - Confidence > 75%
     - No duplicate action
     - No user override

5. **Action Agent**
   - Generates structured execution command
   - Backend executes:
     - Google Calendar
     - Slack
     - SMS
   - Logs into `action-history-index`

---

## 📊 Chaos Score

LifeOps computes a real-time Chaos Score (0–100):

Chaos Score =
(Overdue Bills × 20) +
(Spending Spikes × 15) +
(Calendar Conflicts × 10) +
(Overdue Tasks × 5)


---

## 🗂 Elasticsearch Indices

- `events-index`
- `finance-index`
- `calendar-index`
- `action-history-index`

---

## 🚀 Setup

### 1. Install dependencies
### 2. Create `.env`

ELASTIC_URL=http://localhost:9200

ELASTIC_USERNAME=elastic
ELASTIC_PASSWORD=your_password
ELASTIC_API_KEY=your_agent_api_key
AGENT_CLASSIFIER=endpoint
AGENT_RISK=endpoint
AGENT_PLANNER=endpoint
AGENT_VERIFIER=endpoint
AGENT_ACTION=endpoint


### 3. Start server


---

## 🧪 Test
POST /process-email
{
"raw_text": "Your electricity bill of ₹2450 is due tomorrow."
}


---

## 🏆 Why This Project Is Unique

- Multi-agent orchestration
- Cross-index Elasticsearch reasoning
- Time-series anomaly detection
- Guardrails before action
- Backend-controlled execution
- Measurable Chaos Score reduction

---

## 📌 Future Improvements

- Real Google Calendar integration
- Twilio WhatsApp alerts
- Slack bot integration
- Dashboard UI
- Predictive chaos prevention



(For Offline Demo):

In orchestrator.js:


Replace real agent calls with mock functions when USE_MOCK=true in .env.
